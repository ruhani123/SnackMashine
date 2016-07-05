using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.ServiceModel.Activation;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;
using WcfService1.business;
namespace WcfService1

{
   
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]


    public class Service1 : IService1
    {


        public List<Product> GetData()
        {
            List<Product> list = null;
            System.Diagnostics.Debug.WriteLine("+++++++++++++++");
            try {

                ISnackService snackService = new SnackService();
                list = (List<Product>)snackService.GetProducts();

            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e);
            }

            return list;

        }

          public double Buy(BuyProduct buyProduct)
          {
            double remain = 0;
              try
              {
                System.Diagnostics.Debug.WriteLine(buyProduct.code);
                  if (buyProduct == null)
                  {
                      throw new ArgumentNullException("buyProduct");
                  }

                ISnackService snackService = new SnackService();

                remain = (double)snackService.BuyProduct(buyProduct.code, buyProduct.price, buyProduct.amount);


            }
              catch (Exception e)
              {
                  System.Diagnostics.Debug.WriteLine(e);
              }

            return remain;

        }

  


    }
}
