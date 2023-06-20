/** 
######################################################################
############################# APP STORAGE ############################
######################################################################
*/

 
  import { UserInfo } from 'src/app/app.interfaces';
import { LOCAL_STORAGE_KEYS } from './constant';
  

  
  export class StorageHelper {
    encryptSecret: string = 'supersecret';
    constructor() {}
  
    
    private get(key: string) {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key) as string);
      }
    }
  
    private set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    clearAll() {
      localStorage.clear();
    }
  
    /**
     * User Info
     */
    get userInfo(): UserInfo {
      return this.get(LOCAL_STORAGE_KEYS.USER_INFO);
    }
  
    set userInfo(userInfo: UserInfo) {
      this.set(LOCAL_STORAGE_KEYS.USER_INFO, userInfo);
    }
  
    clearUserInfo() {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO);
    }
  
 
 
  
 
  
   
  
 
  
    
  }
  