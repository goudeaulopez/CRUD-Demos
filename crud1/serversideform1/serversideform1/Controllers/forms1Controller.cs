using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using serversideform1.Models;
using serversideform1.Services;

namespace serversideform1.Controllers
{
    [Route("api/form1s")]
    [ApiController]
    public class forms1Controller : Controller
    {
        private IDataService<form1> _dataService;

        public forms1Controller(IDataService<form1> dataService)
        {
            _dataService = dataService;
        }
        [HttpGet]
        public JsonResult GetAll()
        {
            try
            {
                IEnumerable<form1> list = _dataService.GetAll();
                return Json(list);
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }
        }
        [HttpPost]
        public JsonResult Create([FromBody] formvalues fv)
        {
            
            try
            {
                
                    //map
                    form1 fm = new form1
                    {
                        Firstname=fv.Firstname,
                        Lastname=fv.Lastname,
                        Email=fv.Email,
                        Phone=fv.Phone,
                        Appointments=fv.Appointment,
                        Description=fv.Description
                    };
                   _dataService.Create(fm);
                    
                    return Json(fm);
                
            }
            catch (Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }
        }
        [HttpPut("{id}")]
        public JsonResult Update([FromBody] formvalues fv,int id)
        {
            var item = _dataService.GetSingle(c => c.Id == id);
            if(item == null)
            {
                return Json(1);
            }
            item.Firstname = fv.Firstname;
            item.Lastname = fv.Lastname;
            item.Phone = fv.Phone;
            item.Email = fv.Email;
            item.Description = fv.Description;
            item.Appointments = fv.Appointment;


            _dataService.Update(item);
            return Json(item);
            
        }

        [HttpGet("{id}")]
        public JsonResult Details(int id)
        {
            try
            {
                var itemTest = _dataService.GetSingle(c => c.Id == id);
                if(itemTest== null)
                {
                    return Json(1);
                }

                return Json(itemTest);
            }
            catch (Exception ex)
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
                var itemTest = _dataService.GetSingle(c => c.Id == id);
                if (itemTest == null)
                {
                    return Json(1);
                }

                _dataService.Delete(itemTest);
                return Json(itemTest);
            }
            catch(Exception ex)
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { message = ex.Message });
            }
        }

    }
}