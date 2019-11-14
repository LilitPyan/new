import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import HeaderText from "../HeaderText/HeaderText";
import LineBreak from "../LineBreak/LineBreak";
import Label from "../Label/Label";
import Image from "../Image/Image";
import TextInput from "../TextInput/TextInput";
import MultiLineInput from "../MultiLineInput/MultiLineInput";
import MultipleChoice from "../MultipleChoice/MultipleChoice";

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


class App extends Component {
  state = {
    items: [<HeaderText/>, <LineBreak/>, <Label/>,<Image/>,<TextInput/>,<MultiLineInput/>,<MultipleChoice/>],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default App;