namespace MovieStoreApi.Models
{
    public class Show
    {
        public string type { get; set; } = null!;
        public decimal price { get; set; }
        public int seatsAvailable { get; set; }
        public string time { get; set; } = null!;
        public string status { get; set; } = null!;
    }
}
