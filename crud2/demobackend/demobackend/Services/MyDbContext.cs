using demobackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demobackend.Services
{
	public class MyDbContext: DbContext
	{
		public DbSet<PersonalDetail>  TbPersonalDetails { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder option)
		{
			option.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB ; Database=Crud2DB ; Trusted_Connection=True;");
		}
	}
}
