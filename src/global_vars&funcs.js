import {useEffect} from 'react';

let border_active_list;
let default_class_name;
let addition_class_name;

function hide_border_active(element_index){
    let border = border_active_list[element_index];
    if (border){
        border_active_list[element_index].className = default_class_name;
    }
}

function visible_border_active(element_index){
    let border = border_active_list[element_index];
    if (border){
        border_active_list[element_index].className+= ` ${addition_class_name}`;
    }
}

export function set_border_active_list(class_name, new_class){
    default_class_name = class_name;
    addition_class_name = new_class;
    border_active_list = Array.from(document.getElementsByClassName(class_name));
}

export function useBorderActive(element_index, isUse){
    useEffect(() => {
        if (isUse){
            visible_border_active(element_index);
        }
        return () => {
            hide_border_active(element_index);
        };
    }, [element_index, isUse]);
}
