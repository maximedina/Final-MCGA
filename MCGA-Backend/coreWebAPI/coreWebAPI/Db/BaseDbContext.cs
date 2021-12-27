using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MOM.Core.Db
{
    public abstract class BaseDbContext : DbContext
    {
        public BaseDbContext(DbContextOptions options) : base(options) { }

        public T AddOrUpdate<T>(T entity) where T : class
        {
            if (Entry(entity).State == EntityState.Detached)
            {
                Attach(entity);
            }
            if(Entry(entity).State != EntityState.Added)
            {
                Set<T>().Update(entity);
            }
            SaveChanges();
            return entity;
        }

        public bool TryDeleteEntity<T>(T entity) where T : class
        {
            try
            {
                Set<T>().Remove(entity);
                SaveChanges();
                return true;
            }
            catch (Exception){ return false; }            
        }

        private bool Exists<T>(T entity) where T : class
        {
            return Set<T>().Local.Any(e => e == entity);
        }

        private IEnumerable<string> GetIncludePaths(Type clrEntityType)
        {
            var entityType = Model.FindEntityType(clrEntityType);
            var includedNavigations = new HashSet<INavigation>();
            var stack = new Stack<IEnumerator<INavigation>>();

            while (true)
            {
                var entityNavigations = new List<INavigation>();
                foreach (var navigation in entityType.GetNavigations())
                {
                    if (includedNavigations.Add(navigation) || stack.Count > 1)
                        entityNavigations.Add(navigation);
                }
                if (entityNavigations.Count == 0)
                {
                    if (stack.Count > 0)
                        yield return string.Join(".", stack.Reverse().Select(e => e.Current.Name));
                }
                else
                {
                    foreach (var navigation in entityNavigations)
                    {
                        var inverseNavigation = navigation.FindInverse();
                        if (inverseNavigation != null)
                            includedNavigations.Add(inverseNavigation);
                    }
                    stack.Push(entityNavigations.GetEnumerator());
                }
                while (stack.Count > 0 && !stack.Peek().MoveNext())
                    stack.Pop();
                if (stack.Count == 0) break;
                entityType = stack.Peek().Current.GetTargetType();
            }
        }

		public List<TEntity> GetAll<TEntity>() where TEntity : class 
		{
			return Set<TEntity>().ToList();
		}
	}
}