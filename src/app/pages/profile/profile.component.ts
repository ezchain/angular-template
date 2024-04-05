import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarService } from '../../components/sidebar/sidebar.service';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  pageTitle =
    'My name is Jenna, and I’m a Web Designer with a Strong Sense of Humor and Creative Expertise!';
  pageDesc =
    "I'm a passionate web designer with years of experience in creating clean, user-friendly designs. I'm committed to delivering high-quality work that meets the unique needs of each client. Lets work together to bring your vision to life in no time.";
  pageAlt = 'Hello there 👋';
  secondSectionTitle = 'My Services';
  secondSectionDesc =
    'Check Out All Services below then Click the Get Started Button to Proceed';
  thirdSectionTitle = 'My Work';
  thirdSectionDesc =
    "I've been busy past few years, working on some of the best projects. Here's a Glimpse!";
  fourthSectionTitle = 'Testimonials';
  fourthSectionDesc =
    'Check Out Some Stunning Testimonials by my Clients, who Loved my Work!';
  tapOneSelected = false;
  formData = {
    name: '',
    email: '',
    message: '',
  };
  carouselElements = [
    {
      name: 'Anna Parker',
      subtitle: 'CEO - ABC Co',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Anna Parker',
      subtitle: 'CEO - ABC Co',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Anna Parker',
      subtitle: 'CEO - ABC Co',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  myServicesElements = [
    {
      name: 'Web Desing',
      desc: 'Create Your Next Amazing Website Today with Me',
      icon: 'space_dashboard',
      selected: false,
    },
    {
      name: 'Logo Design',
      desc: 'Create Your Next Amazing Website Today with Me',
      icon: 'space_dashboard',
      selected: false,
    },
    {
      name: 'Website Mainteince',
      desc: 'Create Your Next Amazing Website Today with Me',
      icon: 'space_dashboard',
      selected: false,
    },
  ];
  pageWidth = 2000;
  showSideBar = false;
  constructor(private elementRef: ElementRef, private router:Router) {}

  ngOnInit() {
    this.pageWidth = this.elementRef.nativeElement.offsetWidth;
    this.getCarouselItems();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.pageWidth = this.elementRef.nativeElement.offsetWidth;
  }

  getCarouselItems() {
    if (this.pageWidth < 500) return this.carouselElements.slice(0, 1);
    if (this.pageWidth < 720) return this.carouselElements.slice(0, 2);

    return this.carouselElements.slice(0, 3);
  }

  selectService(name: string) {
  
    let item = this.myServicesElements.find((e) => e.name == name);
    let selected = item?.selected;
    this.myServicesElements.forEach((e) => (e.selected = false));
    if (item != undefined) item.selected = !selected;
  }

  onSubmit() {
    console.log(this.formData);
  }

  goToProjects(){
    this.router.navigate(['/projects']);
  }


}
