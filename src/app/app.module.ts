import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skill-main/skills/skills.component';
import { CertificationsComponent } from './skill-main/certifications/certifications.component';
import { AchievementsComponent } from './skill-main/achievements/achievements.component';
import { ProjectComponent } from './project-main/project/project.component';
import { CertificatesComponent } from './skill-main/certifications/certificates/certificates.component';
import { ArtCertificationsComponent } from './hobby/art-certifications/art-certifications.component';
import { ArtCertificatesComponent } from './hobby/art-certifications/art-certificates/art-certificates.component';
import { MountaineeringComponent } from './hobby/mountaineering/mountaineering.component';
import { OthersComponent } from './hobby/others/others.component';
import { ExperienceComponent } from './experiences/experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TestifyComponent } from './testify/testify.component';
import { Group1Component } from './project-main/group1/group1.component';
import { Group2Component } from './project-main/group2/group2.component';
import { GroupItemComponent } from './project-main/group-item/group-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    CertificationsComponent,
    AchievementsComponent,
    ProjectComponent,
    CertificatesComponent,
    ArtCertificationsComponent,
    ArtCertificatesComponent,
    MountaineeringComponent,
    OthersComponent,
    ExperienceComponent,
    EducationComponent,
    ContactUsComponent,
    AchievementComponent,
    TestifyComponent,
    Group1Component,
    Group2Component,
    GroupItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
