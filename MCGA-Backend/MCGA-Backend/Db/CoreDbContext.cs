using Microsoft.EntityFrameworkCore;
using MOM.Core.Models.Security;
using MOM.Core.Db.Configuration.Security;
using MOM.Core.Models.Localizacion;
using MOM.Core.Db.Configuration.Localizacion;

namespace MOM.Core.Db
{
    public class CoreDbContext : BaseDbContext
    {
        #region Tables

        #region Localizacion
        public DbSet<Provincia> Provincias { get; set; }
        public DbSet<Ciudad> Ciudades { get; set; }
        #endregion

        #region Security
        public DbSet<SystemModule> SystemModules { get; set; }
        public DbSet<SystemSetting> SystemSettings { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ProfilePermission> ProfilePermissions { get; set; }
        public DbSet<OperationLog> OperationLog { get; set; }
        public DbSet<Session> Session { get; set; }
        public DbSet<SessionLog> SessionLog { get; set; }

        #endregion

        #endregion

        public CoreDbContext(DbContextOptions<CoreDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Database Properties

            #region Localizacion
            modelBuilder.ApplyConfiguration(new ProvinciasConfiguration());
            modelBuilder.ApplyConfiguration(new CiudadesConfiguration());
            #endregion

            #region security
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new PermissionConfiguration());
            modelBuilder.ApplyConfiguration(new ProfileConfiguration());
            modelBuilder.ApplyConfiguration(new ProfilePermissionConfiguration());
            modelBuilder.ApplyConfiguration(new SystemModuleConfiguration());
            modelBuilder.ApplyConfiguration(new SystemSettingConfiguration());
            modelBuilder.ApplyConfiguration(new OperationLogConfiguration());
            modelBuilder.ApplyConfiguration(new SessionConfiguration());
            #endregion

            #endregion
        }
    }
}