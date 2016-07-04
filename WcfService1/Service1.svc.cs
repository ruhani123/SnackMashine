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
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.

    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]

    // [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class Service1 : IService1
    {

        [EnableCors(origins: "*", headers: "*", methods: "*")]

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

          public void Buy(BuyProduct buyproduct)
          {
              try
              {
                  System.Diagnostics.Debug.WriteLine(buyproduct.code);
                  if (buyproduct == null)
                  {
                      throw new ArgumentNullException("buyproduct");
                  }

                  System.Diagnostics.Debug.WriteLine(buyproduct.price);

              }
              catch (Exception e)
              {
                  System.Diagnostics.Debug.WriteLine(e);
              }

       
    }

       /* public void Buy(int code)
        {
            System.Diagnostics.Debug.WriteLine(code);
            System.Diagnostics.Debug.WriteLine("aa");
        }*/


    }
}
