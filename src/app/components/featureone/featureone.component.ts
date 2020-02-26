import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-featureone',
  templateUrl: './featureone.component.html',
  styleUrls: ['./featureone.component.css']
})
export class FeatureoneComponent implements OnInit, OnChanges {
  @Input() linkdata1;

  invalidUrl = false;

  urlSafe;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.urlSafe = '';
    if (this.linkdata1 === 'Please Enter an valid URL') {
      this.invalidUrl = true;
    } else if (this.linkdata1) {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkdata1);
    }
  }

}
