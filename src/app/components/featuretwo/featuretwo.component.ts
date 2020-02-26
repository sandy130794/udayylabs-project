import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-featuretwo',
  templateUrl: './featuretwo.component.html',
  styleUrls: ['./featuretwo.component.css']
})
export class FeaturetwoComponent implements OnInit, OnChanges {
  @Input() linkdata2;

  invalidUrl = false;

  urlSafe;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.linkdata2 === 'Please Enter an valid URL') {
      this.invalidUrl = true;
    }
  }

  ngOnChanges() {
    if (this.linkdata2 === 'Please Enter an valid URL') {
      this.invalidUrl = true;
    } else if (this.linkdata2) {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkdata2);
    }
  }

}
