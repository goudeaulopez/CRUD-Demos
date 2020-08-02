using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace demobackend.Services
{
	public class DataServices<T> : IDataService<T> where T : class
	{
		private MyDbContext _dbContext;
		private DbSet<T> _dbSet;

		public DataServices()
		{
			_dbContext = new MyDbContext();
			_dbSet = _dbContext.Set<T>();
		}

		public void Create(T entity)
		{
			_dbSet.Add(entity);
			_dbContext.SaveChanges();
		}

		public void Delete(T entity)
		{
			_dbSet.Remove(entity);
			_dbContext.SaveChanges();
		}

		public IEnumerable<T> GetAll()
		{
			return _dbSet.ToList();
		}

		public T GetSingle(Expression<Func<T, bool>> predicate)
		{
			return _dbContext.Set<T>().FirstOrDefault(predicate);
		}

		public void Update(T entity)
		{
			_dbSet.Update(entity);
			_dbContext.SaveChanges();
		}
	}
}
