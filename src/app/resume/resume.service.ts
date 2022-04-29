import {Injectable, TemplateRef} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

export interface WorkInfo {
  company: string;
  title?: string;
  dates?: string;
  description?: TemplateRef<any>;
  shortDescription?: string;
}

@Injectable({providedIn: 'root'})
export class ResumeService {
  private _jobs = new BehaviorSubject<WorkInfo[]>([]);
  readonly jobs$ = this._jobs.asObservable();

  experienceData: WorkInfo[] = [
    {
      company: 'Zyyah',
      title: 'Senior Software Engineer, Front-End',
      dates: 'December 2021 – April 2022',
      shortDescription: `Took designs and requirements from designers and product owners to implement a new feature that would start the process of the platform being monetized from multiple sources. Worked with UI designers on how best to implement and create a new component library using Tailwind but also make it easier for developers to implement new features across multiple applications.`
    },
    {
      company: 'American First Finance',
      title: 'Senior Software Engineer, Front-End',
      dates: 'August 2021 – March 2022',
      shortDescription: 'Lead developer helping lead the company in the transition of all software applications and web sites to a modern front-end architecture using Angular and NX. Implemented a micro-frontend architecture inside of a mono-repo that managed any front-end for internal employees, external merchants, and external customers. Aided in informing the overall system architecture including back-end, content management, and digital asset management. Worked with upper management and C-Suite on how to best implement an Agile work and team structure to help the company achieve desired outcomes.'
    },
    {
      company: 'HealthMark Group',
      title: 'Senior Software Engineer, Front-End',
      dates: 'April 2021 – December 2021',
      shortDescription: 'Lead front-end architect and designer implementing Angular for all patient and clinic facing applications. Collaborated with backend engineers, product owners, VPs, and C-Suite individuals to figure out and implement intuitive and comprehensive solutions for the desired outcomes of all applications. Supplied input as to entire system architecture including backend, frontend, deployment, and cloud solutions. Set up design systems and rules around how UIs should look, feel, and behave; to have a consistent and predictable user experience.'
    },
    {
      company: 'Linux Academy/A Cloud Guru',
      title: 'Angular Developer/Software Engineer',
      dates: 'June 2019 – June 2021',
      shortDescription: 'Primary front-end engineer for internal Angular application used by the entire company to manage, produce, and edit primary content for online cloud training platform. Application reaches out to talk to multiple back-end systems and services to achieve goals. Worked on all legacy applications to reduce application size and enhance/improve the user experience.'
    },
    {
      company: 'Premier Designs',
      title: 'UX & UI Designer/Developer',
      dates: 'September 2016 – June 2019',
      shortDescription: 'Lead conceptual overhaul of administrative platform for 30,000 DSA consultants to better help them manage their businesses. Primary UI design and front-end developer of new platform using Angular 2+ integrated with .NET MVC eCommerce platform. Maintain frontend code of public facing marketing and eCommerce site.'
    },
    {
      company: 'Diamond Data Systems',
      title: 'Web Specialist/Customer Support',
      dates: 'March 2013 – August 2016',
    },
    {
      company: 'DCS Global',
      title: 'Front End Developer/Graphic Design',
      dates: 'July 2012 – January 2013',
    },
    {
      company: 'GDSX',
      title: 'Customer Engagement Manager',
      dates: 'March 2009 – September 2011',
    }
  ];

  fetchJobs(): Observable<WorkInfo[]> {
    this._jobs.next(this.experienceData);
    return this.jobs$;
  }

}
