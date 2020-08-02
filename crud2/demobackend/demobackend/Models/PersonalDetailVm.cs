using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demobackend.Models
{
	public class PersonalDetailVm
	{
		public string firstname { get; set; }
		public string lastname { get; set; }
		public IFormFile image { get; set; }

	}
}
