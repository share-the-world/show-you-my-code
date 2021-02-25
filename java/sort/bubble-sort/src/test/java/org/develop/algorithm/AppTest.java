package org.develop.algorithm;

import java.beans.Transient;
import java.util.logging.Logger;

import org.junit.Assert;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest{
    Logger logger = Logger.getLogger(AppTest.class.getName());
   App app = new App();
   @Test
   public void testDoIt(){
      int[] sort = app.doItAsc(new int[]{1, 3, 5, 9, 20, 111, 0, -3});
      for (int i = 0; i < sort.length; i++) {
         System.out.print(sort[i] + " "); 
      }
   }
   @Test
   public void testDoIt2(){
    int[] sort = app.doItDesc(new int[]{1, 3, 5, 9, 20, 111, 0, -3});
      for (int i = 0; i < sort.length; i++) {
         System.out.print(sort[i] + " "); 
      }
    }
    
}
