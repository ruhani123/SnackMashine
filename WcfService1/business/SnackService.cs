using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WcfService1.dao;

namespace WcfService1.business
{
    public class SnackService : ISnackService
    {
        private ISnackDao snackDao;
        public SnackService()
        {
            snackDao = new SnackDao();
        }
        public List<Product> GetProducts()
        {
            return snackDao.GetProducts();
        }

        public double BuyProduct(int code,double price, double amount)
        {
           return snackDao.BuyProduct(code,price,amount);
        }
    }
}