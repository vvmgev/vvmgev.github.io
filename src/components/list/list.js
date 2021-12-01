import { memo } from 'react';
import './list.css';

const List = ({items, render, itemClick, ...restProps} ) => {
    return (
        <ul {...restProps}>
          {items.map((item, index) => (
            <li onClick={() => itemClick && itemClick(item, index)} key={item.id ||  index}>
              {render(item, index)}
            </li>
          ))}
        </ul>
      );
}

export default memo(List);