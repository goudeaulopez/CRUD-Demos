using Microsoft.EntityFrameworkCore;
using serversideform1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace serversideform1.Services
{
	public class MyDbContext: DbContext
	{
		public DbSet<form1> Tbforms { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder option)
		{
			option.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB ; Database=MyDataBase ; Trusted_Connection=True;");
		}
	}
}
