﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace serversideform1.Services
{
	public class DataService<T> : IDataService<T> where T : class
	{
		private MyDbContext _context;
		private DbSet<T> _dbSet;

		public DataService()
		{
			_context = new MyDbContext();
			_dbSet = _context.Set<T>();
		}

		public void Create(T entity)
		{
			_dbSet.Add(entity);
			_context.SaveChanges();
		}

		public void Delete(T entity)
		{
			_dbSet.Remove(entity);
			_context.SaveChanges();
		}

		public IEnumerable<T> GetAll()
		{
			return _dbSet.ToList();
		}

		public T GetSingle(Expression<Func<T, bool>> predicate)
		{
			return _context.Set<T>().FirstOrDefault(predicate);
		}

		public void Update(T entity)
		{
			_dbSet.Update(entity);
			_context.SaveChanges();
		}
	}
}
