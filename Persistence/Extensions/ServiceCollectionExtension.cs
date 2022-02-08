using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Persistence.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddDbContexts(this IServiceCollection services, IConfiguration _config)
        {
            services.AddDbContext<DataContext>(cfg=>{
                cfg.UseSqlite(_config.GetConnectionString("DefaultConnection"));

            });
            return services;
        }
        
    }
}