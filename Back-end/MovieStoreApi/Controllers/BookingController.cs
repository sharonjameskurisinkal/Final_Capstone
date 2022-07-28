using MovieStoreApi.Models;
using MovieStoreApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MovieStoreApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class BookingController : ControllerBase
    {
        private readonly BookingService _bookingService;

        public BookingController(BookingService bookingService) =>
            _bookingService = bookingService;

        [HttpGet]
        public async Task<List<Booking>> Get() =>
            await _bookingService.getBookingList();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Booking>> Get(string id)
        {
            var movie = await _bookingService.getBooking(id);

            if (movie is null)
            {
                return NotFound();
            }

            return movie;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Booking newBooking)
        {
            await _bookingService.createBooking(newBooking);

            return CreatedAtAction(nameof(Get), new { id = newBooking.Id }, newBooking);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Booking updatedBooking)
        {
            var booking = await _bookingService.getBooking(id);

            if (booking is null)
            {
                return NotFound();
            }

            updatedBooking.Id = booking.Id;

            await _bookingService.updateBooking(id, updatedBooking);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var movie = await _bookingService.getBooking(id);

            if (movie is null)
            {
                return NotFound();
            }

            await _bookingService.deleteBooking(id);

            return NoContent();
        }
    }
}
