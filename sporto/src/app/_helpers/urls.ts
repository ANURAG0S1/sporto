/** 
######################################################################
############################### APP URLS #############################
######################################################################
*/

class ApplicationUrls {
  private static appUrlsInstance: ApplicationUrls;
  // public serverUrl: string = '';

  public static getInstance(): ApplicationUrls {
    if (!ApplicationUrls.appUrlsInstance) {
      ApplicationUrls.appUrlsInstance = new ApplicationUrls();
    }
    return ApplicationUrls.appUrlsInstance;
  }

  /** 
  ##################################################
  ################# AUTHENTICATION #################
  ##################################################
  */

  /**
   * User Details
   */
  get userDetailsUrl() {
    return '/services/user/details';
  }

  /** 
  ##################################################
  #################### WIDGETS #####################
  ##################################################
  */

  /**
   * Widgets Metadata Url
   */
  get widgetsMetadataUrl() {
    return '/services/widgets/metadata';
  }

}

export let applicationUrls = ApplicationUrls.getInstance();
