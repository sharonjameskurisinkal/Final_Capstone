using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieStoreApi.Models
{
    public class Movie
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string name { get; set; } = null!;
        public string image { get; set; } = null!;
        [BsonElement("languages")]
        public List<String> languages { get; set; }
        public string duration { get; set; } = null!;
        public List<String> genre { get; set; }
        public string rating { get; set; } = null!;
        public string release_date { get; set; } = null!;
        public List<Theatre> theatres { get; set; }
        public string description { get; set; } = null!;
    }
}
