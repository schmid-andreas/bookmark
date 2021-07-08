import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../../model/Link";
import {LinkService} from "../../service/link.service";

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.css']
})
export class LinkTableComponent implements OnInit {

  @Input('id')
  public id: string | undefined;

  public links: Link[] = [];

  public readonly columnsToDisplay = ['position', 'name', 'clicks'];

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkService.getAllLinksByCategory(this.id).subscribe(links => {
      this.links = links;
    });
  }

}
