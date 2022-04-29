import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {map, Observable} from "rxjs";
import {ResumeService, WorkInfo} from "./resume.service";
import {DomSanitizer} from "@angular/platform-browser";

interface EducationInfo {
  school: string;
  topic: string;
  dates: string;
  description: string;
}



@Component({
  selector: 'ch-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, AfterViewInit {
  @ViewChild('diamondDataDescription', {static: false}) diamondDataDescription: TemplateRef<any>;
  @ViewChild('dcsGlobalDescription', {static: false}) dcsGlobalDescription: TemplateRef<any>;
  @ViewChild('gdsxDescription', {static: false}) gdsxDescription: TemplateRef<any>;
  educationData: EducationInfo[] = [
    {
      school: 'Full Sail University Online',
      topic: 'Bachelor of Science',
      dates: 'June 2015',
      description: 'Studied music production, business, composition, and project management'
    },
    {
      school: 'The Art Institute Online',
      topic: 'Graphic Design & Multimedia',
      dates: '2012',
      description: 'Studied digital, print and multi-media graphic design',
    },
    {
      school: 'South Garland High School',
      topic: 'High School Diploma',
      dates: '2000',
      description: '',
    }
  ];
  jobs$: Observable<WorkInfo[]> = this.resumeService.fetchJobs();

  constructor(private resumeService: ResumeService,
              public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.jobs$.pipe(
      map((jobs: WorkInfo[]) => {
        return jobs.map((job) => {
          switch (job.company) {
            case 'Diamond Data Systems': {
              job.description = this.diamondDataDescription;
              break;
            }
            case 'DCS Global': {
              job.description = this.dcsGlobalDescription;
              break;
            }
            case 'GDSX': {
              job.description = this.gdsxDescription;
              break;
            }
            default: {
              break;
            }
          }
          return job;
        });
      })
    ).subscribe();
  }

}
