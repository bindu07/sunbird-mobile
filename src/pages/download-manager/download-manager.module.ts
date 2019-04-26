import { NoDownloadsComponent } from './no-downloads/no-downloads';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadManagerPage } from './download-manager';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DownloadManagerPage,
    NoDownloadsComponent
  ],
  imports: [
    IonicPageModule.forChild(DownloadManagerPage),
    TranslateModule.forChild()
  ],
})
export class DownloadManagerPageModule {}
