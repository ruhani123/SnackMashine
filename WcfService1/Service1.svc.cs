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
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class Service1 : IService1
    {

        [EnableCors(origins: "*", headers: "*", methods: "*")]
      
        public List<Product> GetData() 
        {
            List<Product> list = null;
            System.Diagnostics.Debug.WriteLine("+++++++++++++++");
            Console.WriteLine("+++++++++++++++");
            try {
                // List<Product> list = new List<Product>();
                ISnackService snackService = new SnackService();
                 list = (List<Product>)snackService.GetProducts();
                //Product product1 = new Product();
                // product1.code = 2;
                // product1.name = "test";
                // product1.price = (float)1.5;
                //list.Add(product1);
                foreach(var a in list)
                {
                    Console.WriteLine(a);
                    System.Diagnostics.Debug.WriteLine(a);
                }
                Console.WriteLine("------------------");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }


            return list;

           
            
        }

        public CompositeType GetDataUsingDataContract(CompositeType composite)
        {
            if (composite == null)
            {
                throw new ArgumentNullException("composite");
            }
            if (composite.BoolValue)
            {
                composite.StringValue += "Suffix";
            }
            return composite;
        }
    }
}
