/*
 * Copyright 2000-2017 Vaadin Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.vaadin.flow.demo.helloworld;

import com.vaadin.flow.router.View;
import com.vaadin.ui.Composite;
import com.vaadin.ui.common.StyleSheet;
import com.vaadin.ui.html.Div;
import com.vaadin.ui.html.Label;

/**
 * The main view contains a simple label element and a template element.
 */
@StyleSheet("frontend://../styles.css")
public class MainView extends Composite<Div> implements View {

    public MainView() {
        // This is just a simple label created via Elements API
        Label label = new Label("Hello");
        getContent().add(label);
        // This is a simple template example
        ExampleTemplate template = new ExampleTemplate();
        getContent().add(template);
    }

}
