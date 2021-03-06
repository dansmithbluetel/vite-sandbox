import InviteMembers2 from "../components/InviteMembers2";

export default {
    component: InviteMembers2,
    title: 'Components/InviteMembers2'
}

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    components: { InviteMembers2 },
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: '<InviteMembers2 v-bind="$props" v-on="$props" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {

};