using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace demobackend.Models
{
	public class PersonalDetail
	{
		public int Id { get; set; }
		public string Firstname { get; set; }
		public string Lastname { get; set; }
	    public string ProfileImage { get; set; }
	}
}
