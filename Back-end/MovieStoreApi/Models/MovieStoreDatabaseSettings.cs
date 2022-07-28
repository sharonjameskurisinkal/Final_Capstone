namespace MovieStoreApi.Models
{
    public class MovieStoreDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string MoviesCollectionName { get; set; } = null!;
        public string AdminsCollectionName { get; set; } = null!;
        public string BookingsCollectionName { get; set; } = null!;
    }
}
