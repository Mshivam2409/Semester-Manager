declare module "galio-framework" {

    import Accordion from './Accordion';
    import Block from './Block';
    import Button from './Button';
    import Card from './Card';
    import Checkbox from './Checkbox';
    import DeckSwiper from './DeckSwiper';
    import Icon from './Icon';
    import Input from './Input';
    import NavBar from './NavBar';
    import Radio from './Radio';
    import Slider from './Slider';
    import Switch from './Switch';
    import Text from './Text';
    import Toast from './Toast';
    import theme, { withGalio, GalioProvider } from './theme';
    import galioConfig from './config/galio.json';
    declare const GalioFont: any;
    export { Accordion, Block, Button, Card, Checkbox, DeckSwiper, Icon, Input, NavBar, Radio, Slider, Text, Toast, Switch, theme, withGalio, GalioProvider, galioConfig, GalioFont, };
}