import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.sass'
})
export class PageContentComponent {
  srcPath: string = 'md/directive.md';

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((res?: any) => {
      const params: any = res.params;
      this.srcPath = `md/${params.path}/${params.file}.md`
    })
  }
}
