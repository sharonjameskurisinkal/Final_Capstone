using MovieStoreApi.Models;

namespace MovieStoreApi.Services
{
    public interface IAdminService
    {
        Task<Admin> Authenticate(string username, string password);
    }
}
