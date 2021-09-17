import InviteMembersVuex from "../components/InviteMembersVuex";

export default {
    component: InviteMembersVuex,
    title: 'Components/InviteMembersVuex'
}

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    components: { InviteMembersVuex },
    props: Object.keys(argTypes),
    // Storybook provides all the args in a $props variable.
    // Each arg is also available as their own name.
    template: '<InviteMembersVuex v-bind="$props" v-on="$props" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {

};