using MovieStoreApi.Models;
using MovieStoreApi.Repository;

namespace MovieStoreApi.Services
{
    public class AdminService : IAdminService
    {
        private readonly AdminDao _adminDao;
        private List<Admin> _admins;

        public AdminService(AdminDao adminDao) =>
            _adminDao = adminDao;
        private async Task<List<Admin>> getAdminList() =>
             await  _adminDao.GetAsync();
        

        public async Task<Admin> Authenticate(string username, string password)
        {
            _admins = await Task.Run(() => getAdminList());

            var admin = await Task.Run(() => _admins.SingleOrDefault(x => x.Username == username && x.Password == password));
            return admin;
        }
    }
}
