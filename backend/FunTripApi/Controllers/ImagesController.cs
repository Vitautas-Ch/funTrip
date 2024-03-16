using Microsoft.AspNetCore.Mvc;
using ORM;

namespace FunTripApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : Controller
    {
        private readonly IWebHostEnvironment _environment;

        public ImagesController(IWebHostEnvironment env)
        {
            _environment = env;
        }

        [HttpGet]
        public IActionResult GetImage(string path)
        {
            path = path.Substring(1);
            string imagePath = Path.Combine(_environment.ContentRootPath, path);
            return PhysicalFile(imagePath, "image/jpeg");
        }
    }
}
