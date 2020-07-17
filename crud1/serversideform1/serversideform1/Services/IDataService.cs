using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace serversideform1.Services
{
	public interface IDataService<T>
	{
		IEnumerable<T> GetAll();
		void Create(T entity);
		void Update(T entity);
		void Delete(T entity);
		T GetSingle(Expression<Func<T, bool>> predicate);

	}
}
