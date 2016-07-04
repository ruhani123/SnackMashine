using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

using System.Text;

namespace WcfService1
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    
    public interface IService1
    {

        [OperationContract]
         [WebInvoke(Method ="POST", ResponseFormat =WebMessageFormat.Json)]

        List<Product> GetData();

        [OperationContract]
        //[WebInvoke(Method = "POST")]
         [WebInvoke(Method = "POST"  ,BodyStyle = WebMessageBodyStyle.WrappedRequest, RequestFormat = WebMessageFormat.Json)]
        //void Buy(int code);
         void Buy(BuyProduct buyproduct); 



    }

    [DataContract]
    public class BuyProduct
    {
        [DataMember]
        public int code { get; set; }
        [DataMember]
        public double price { get; set; }
        [DataMember]
        public double amount { get; set; }




    }


}
