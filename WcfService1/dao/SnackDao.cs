﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WcfService1.dao
{
    public class SnackDao : ISnackDao
    {
        List<Product> ISnackDao.GetProducts()
        {
            List<Product> list = new List<Product>(); 
            try
            {
                using (var db=new SnackContext())
                {
                   
                      var query = (from p in db.Product
                                  join t in db.Type on p.type_id equals t.Id
                                  join tt in db.Type on p.size_type_id equals tt.Id
                                  let sizeType=tt.name
                                  let productType=t.name
                                  orderby p.code
                                  select new { p.name, p.code, p.size,sizeType,p.price,p.count,productType}).Take(12);

                      foreach(var q in query)
                      {
                            Console.WriteLine(q);
                          System.Diagnostics.Debug.WriteLine(q);
                          Type productType=new Type();
                          productType.name = q.productType;
                          Type sizeType = new Type();
                          sizeType.name = q.sizeType;
                          Product product = new Product();
                          product.code = q.code;
                        product.price = q.price;
                          product.name = q.name;
                          product.size = q.size;
                          product.count = q.count;
                          product.Type = productType;
                        product.Type1 = sizeType;
                          list.Add(product); 
                    System.Diagnostics.Debug.WriteLine(q);
                }

                    Console.WriteLine(list);
                    System.Diagnostics.Debug.WriteLine(list);

                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
            }

            return list;
        }
    }
}
