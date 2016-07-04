using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WcfService1.business
{
    interface ISnackService
    {
        List<Product> GetProducts();
        void BuyProduct(int code,double price);
    }
}
