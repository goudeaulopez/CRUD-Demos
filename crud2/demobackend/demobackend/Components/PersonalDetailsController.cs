using System;
using System.Collections.Generic;
using System.Net;
using Microsoft.AspNetCore.Mvc;

using demobackend.Models;
using demobackend.Services;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Text;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;

namespace demobackend.Components
{
    [Route("api/personaldetails")]
    [ApiController]
    public class PersonalDetailsController : Controller
    {
        private IDataService<PersonalDetail> _dataService;
        private IWebHostEnvironment _environment;

        public PersonalDetailsController(IDataService<PersonalDetail> dataService, IWebHostEnvironment environment)
        {
            _dataService = dataService;
            _environment = environment;
        }
        [HttpGet]
        public JsonResult GetAll()
        {
            try
            {
                IEnumerable<PersonalDetail> list = _dataService.GetAll();
                return Json(list);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });

            }
        }
        [HttpPost]
        public JsonResult Create([FromForm] PersonalDetailVm vm)
        {
            try
            {

                PersonalDetail personalDetail = new PersonalDetail
                {
                    Firstname = vm.firstname,
                    Lastname = vm.lastname
                };
                if (vm.image != null)
                {
                    var uploadPath = Path.Combine(_environment.WebRootPath, "uploads");
                    Directory.CreateDirectory(Path.Combine(uploadPath));
                    string fileName = Path.GetFileName(vm.image.FileName);
                    string extension = Path.GetExtension(vm.image.FileName);

                    using (var fileStream = new FileStream(Path.Combine(uploadPath, fileName), FileMode.Create))
                    {
                        vm.image.CopyTo(fileStream);
                    }
                    personalDetail.ProfileImage = "uploads" + "/" + fileName;
                }
                _dataService.Create(personalDetail);
                return Json(personalDetail);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }
        }
        [HttpPut("{id}")]
        public JsonResult Update([FromForm] PersonalDetailVm vm,int id)
        {
            try
            {
                var item = _dataService.GetSingle(s => s.Id == id);
                if(item == null)
                {
                    return Json("no data");
                }

                item.Firstname = vm.firstname;
                item.Lastname = vm.lastname;

                if (vm.image != null)
                {
                    var uploadPath = Path.Combine(_environment.WebRootPath, "uploads");
                    Directory.CreateDirectory(Path.Combine(uploadPath));
                    string fileName = Path.GetFileName(vm.image.FileName);
                    string extension = Path.GetExtension(vm.image.FileName);

                    using (var fileStream = new FileStream(Path.Combine(uploadPath, fileName), FileMode.Create))
                    {
                        vm.image.CopyTo(fileStream);
                    }
                    item.ProfileImage = "uploads" + "/" + fileName;
                }
                _dataService.Update(item);
                return Json(item);
            }
            catch(Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }
        }



        [HttpGet("{id}")]
        public JsonResult Details(int id)
        {
            try
            {
                var selected = _dataService.GetSingle(select => select.Id == id);
                if(selected == null)
                {
                    return Json("selected not found");
                }
                return Json(selected);
            }
            catch(Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }

        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            try
            {
                var selected = _dataService.GetSingle(select => select.Id == id);
                if(selected == null)
                {
                    return Json("not found");
                }
                _dataService.Delete(selected);

                return Json(selected);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }
        }
    }
}






       