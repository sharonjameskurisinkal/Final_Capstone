using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MovieStoreApi.Models
{
    public class Booking
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string type { get; set; }
        public string ticketType { get; set; }
        public int count { get; set; }
        public List<String> seats { get; set; }

        public double? total { get; set; }
        public double? convenienceFee { get; set; }

        public string movieId { get; set; }
        public string theatreName { get; set; }

        public double? tax { get; set; }

        public string time { get; set; }


    }
}
