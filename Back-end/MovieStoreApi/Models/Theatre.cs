namespace MovieStoreApi.Models
{
    public class Theatre
    {
        public string name { get; set; } = null!;
        public List<Show> shows { get; set; }
    }
}
