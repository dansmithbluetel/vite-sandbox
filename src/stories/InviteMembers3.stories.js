import InviteMembers3 from "../components/InviteMembers3";

export default {
    component: InviteMembers3,
    title: 'Components/InviteMembers3'
}

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    components: { InviteMembers3 },
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: '<InviteMembers3 v-bind="$props" v-on="$props" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {

};