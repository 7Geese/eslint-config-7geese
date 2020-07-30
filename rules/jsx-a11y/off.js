module.exports = {
    rules: {
        //  accessible-emoji - Enforce emojis are wrapped in <span> and provide screenreader access.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/accessible-emoji.md
        'jsx-a11y/accessible-emoji': 'off',
        //  alt-text - Enforce all elements that require alternative text have meaningful information to relay back to end user.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/alt-text.md
        'jsx-a11y/alt-text': 'off',
        //  anchor-has-content - Enforce all anchors to contain accessible content.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-has-content.md
        'jsx-a11y/anchor-has-content': 'off',
        //  anchor-is-valid - Enforce all anchors are valid, navigable elements.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 'off',
        //  aria-activedescendant-has-tabindex - Enforce elements with aria-activedescendant are tabbable.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-activedescendant-has-tabindex.md
        'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
        //  aria-props - Enforce all `aria-*` props are valid.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-props.md
        'jsx-a11y/aria-props': 'off',
        //  aria-proptypes - Enforce ARIA state and property values are valid.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-proptypes.md
        'jsx-a11y/aria-proptypes': 'off',
        //  aria-role - Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-role.md
        'jsx-a11y/aria-role': 'off',
        //  aria-unsupported-elements - Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/aria-unsupported-elements.md
        'jsx-a11y/aria-unsupported-elements': 'off',
        //  click-events-have-key-events - Enforce a clickable non-interactive element has at least one keyboard event listener.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 'off',
        //  heading-has-content - Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/heading-has-content.md
        'jsx-a11y/heading-has-content': 'off',
        //  html-has-lang - Enforce `<html>` element has `lang` prop.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/html-has-lang.md
        'jsx-a11y/html-has-lang': 'off',
        //  iframe-has-title - Enforce iframe elements have a title attribute.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/iframe-has-title.md
        'jsx-a11y/iframe-has-title': 'off',
        //  img-redundant-alt - Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/img-redundant-alt.md
        'jsx-a11y/img-redundant-alt': 'off',
        //  interactive-supports-focus - Enforce that elements with interactive handlers like `onClick` must be focusable.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/interactive-supports-focus.md
        'jsx-a11y/interactive-supports-focus': 'off',
        //  label-has-for - Enforce that `<label>` elements have the `htmlFor` prop.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': 'off',
        //  label-has-associated-control - Enforce that a label tag has a text label and an associated control.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        'jsx-a11y/label-has-associated-control': 'off',
        //  lang - Enforce lang attribute has a valid value.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/lang.md
        'jsx-a11y/lang': 'off',
        //  media-has-caption - Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/media-has-caption.md
        'jsx-a11y/media-has-caption': 'off',
        //  mouse-events-have-key-events - Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/mouse-events-have-key-events.md
        'jsx-a11y/mouse-events-have-key-events': 'off',
        //  no-access-key - Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-access-key.md
        'jsx-a11y/no-access-key': 'off',
        //  no-autofocus - Enforce autoFocus prop is not used.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-autofocus.md
        'jsx-a11y/no-autofocus': 'off',
        //  no-distracting-elements - Enforce distracting elements are not used.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-distracting-elements.md
        'jsx-a11y/no-distracting-elements': 'off',
        //  no-interactive-element-to-noninteractive-role - Interactive elements should not be assigned non-interactive roles.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-interactive-element-to-noninteractive-role.md
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
        //  no-noninteractive-element-interactions - Non-interactive elements should not be assigned mouse or keyboard event listeners.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-interactions.md
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        //  no-noninteractive-element-to-interactive-role - Non-interactive elements should not be assigned interactive roles.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-element-to-interactive-role.md
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
        //  no-noninteractive-tabindex - `tabIndex` should only be declared on interactive elements.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-noninteractive-tabindex.md
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        //  no-onchange - Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-onchange.md
        'jsx-a11y/no-onchange': 'off',
        //  no-redundant-roles - Enforce explicit role property is not the same as implicit/default role property on element.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-redundant-roles.md
        'jsx-a11y/no-redundant-roles': 'off',
        //  no-static-element-interactions - Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 'off',
        //  role-has-required-aria-props - Enforce that elements with ARIA roles must have all required attributes for that role.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-has-required-aria-props.md
        'jsx-a11y/role-has-required-aria-props': 'off',
        //  role-supports-aria-props - Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/role-supports-aria-props.md
        'jsx-a11y/role-supports-aria-props': 'off',
        //  scope - Enforce `scope` prop is only used on `<th>` elements.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/scope.md
        'jsx-a11y/scope': 'off',
        //  tabindex-no-positive - Enforce `tabIndex` value is not greater than zero.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules/tabindex-no-positive.md
        'jsx-a11y/tabindex-no-positive': 'off',
        //  Enforce that a control (an interactive element) has a text label.
        //  https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
        'jsx-a11y/control-has-associated-label': 'off',
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md
        'jsx-a11y/autocomplete-valid': 'off',
    },
};
