import { ChangeDetectorRef, Component, Type } from '@angular/core';
import { Item } from './item';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  select(select: any) {
    console.log("select", select);
  }



  canSave = true;
  isSpecial = true;
  isUnchanged = true;

  isActive = true;
  nullCustomer: string | null = null;
  currentCustomer = {
    name: 'Laura'
  };

  item!: Item; // defined to demonstrate template context precedence
  items: Item[] = [];

  currentItem!: Item;



  // trackBy change counting
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  currentClasses: Record<string, boolean> = {};

  currentStyles: Record<string, string> = {};

  setStyle: Record<string, string> = {}

  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
    this.setCurrentStylesNew();
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }

  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }

  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  changeIds() {

    this.items.forEach(i => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
  trackByItems(index: number, item: Item): number { return item.id; }

  trackById(index: number, item: any): number { return item.id; }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  stypeStyles: Record<string, boolean> = {};
  typeList: Record<string, boolean> = {};
  currentStylesNew: Record<string, string> = {};
  type1 = false;
  type2 = false;
  type3 = false;

  refeshcurrent() {
    this.stypeStyles = {
      type1: this.type1,
      type2: this.type2,
      type3: this.type3
    };
  }
  setCurrentStylesNew() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.type1 ? 'italic' : 'normal',
      'font-weight': !this.type2 ? 'bold' : 'normal',
      'font-size': this.type3 ? '24px' : '12px'
    };
  }
  show(value: any) {
    console.log(value);
  }
  constructor(private cdRef: ChangeDetectorRef) { }
  ngClassMethod: boolean = false;

  getClassNames() {

    return {
      'active': this.ngClassMethod,
      'highlight': !this.ngClassMethod
    };
  }
  changeClass() {

    this.ngClassMethod = !this.ngClassMethod;
  }


  defaultStyle() {
    return {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold' : 'normal',
      'font-size': !this.isSpecial ? '24px' : '12px'
    }
  }

  valueNgModule: string = "";

  submit(login: any) {

    console.log("Form Submit", login);
  }

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  onSubmit() {
    const firstNameControl = this.myForm.get('firstName');
    const lastNameControl = this.myForm.get('lastName');
    if (firstNameControl && lastNameControl) {
      const firstNameValue = firstNameControl.value;
      const lastNameValue = lastNameControl.value;
      console.log('First Name:', firstNameValue);
      console.log('Last Name:', lastNameValue);
    }
  }

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];

  getId(item: any) {
    return item.id;
  }
  valueInput: string = "";
  value() {
    this.authors = this.authors.map(item => {
      if (item.id === 2) {
        return { ...item, firstName: this.valueInput };
      }

      return item;
    });
    console.info(this.authors);
  }
  ngSwitch: string = "";
  color = 'pink';

  condition = false;
}
