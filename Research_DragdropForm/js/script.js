$(document).ready(function () {
    var components = [
        {
            type: 'text',
            templateView: 
				  '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '    </div>'
                + '</div>',
            templateEdit: 
                '<div class="prev-holder">'
                + '    <div class="form-group" type="text" >'
                + '          <i>Text</i>'
                + '          <input type="text" placeholder="Enter text" bind="title" >'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'input',
            templateView: 				  
                '<div class="holder">'
                + '    <div class="form-group" >'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '        <input type="text">'
                + '    </div>'
                + '</div>',
            templateEdit: 				  
                '<div class="prev-holder">'                  
                + '    <div class="form-group" type="input" >'
                + '          <i>input</i>'
                + '          <input type="text" placeholder="Enter text" bind="title">'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'textarea',
            templateView: 				  
                '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '        <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '    </div>'
                + '</div>',
            templateEdit: 				  
                '<div class="prev-holder">'                  
                + '    <div class="form-group" type="textarea" >'
                + '          <i>textarea</i>'
                + '          <input type="text" placeholder="Enter text" bind="title">'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'datepicker',
            templateView: 				  
                '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '        <div class="date datepicker-group position-relative">'
                + '            <input class="form-control salary-date w-100" type="text" name="date" placeholder="dd/mm/yy" id="birthday" required>'
                + '            <span class="icon-calendar input-group-addon"></span>'
                + '        </div>  '
                + '    </div>'
                + '</div>',
            templateEdit: 				  
                '<div class="prev-holder">'                  
                + '    <div class="form-group" type="datepicker" >'
                + '          <i>datepicker</i>'
                + '          <input type="text" placeholder="Enter text" bind="title">'
                + '          <textarea name="" id="" cols="30" rows="10" bind="desc"></textarea>'
                + '      </div>'
                + '</div>',
        },
        {
            type: 'table',
            templateView: 				  
                '<div class="holder">'
                + '    <div class="form-group">'
                + '        <label bind="title"> Title  </label>'
                + '        <i class="small" bind="desc"> Desc </i>'
                + '          <div class="table-responsive table_` + field + `" >'
                + '                <table class="table">'
                + '                    <thead>'
                + '                        <tr>'
                + '                            <th class="form-builder">'
                + '                            </th>'
                + '                            <th class="form-builder">'
                + '                            </th>'
                + '                        </tr>'
                + '                    </thead>'
                + '                </table>'
                + '            </div>'
                + '    </div>'
                + '</div>'
                + '<div class="prev-holder">'                  
                + '    <div class="form-group" type="datepicker" >'
                + '          <div class="table-responsive table_` + field + `" >'
                + '                <table class="table">'
                + '                    <thead>'
                + '                        <tr>'
                + '                            <th class="form-builder">'
                + '                                <button type="button" class="remove_col_table" data-field="` + field + `">X</button>'                                
                + '                            </th>'
                + '                            <th class="form-builder">'
                + '                                <button type="button" class=" remove_col_table " data-field="` + field + `">X</button>'                                       
                + '                            </th>'
                + '                        </tr>'
                + '                    </thead>'
                + '                </table>'
                + '            </div>'
                + '      </div>'
                + '</div>',
            templateEdit: 				  
                '<div class="prev-holder">'                  
                + '    <div class="form-group" type="datepicker" >'
                + '          <div class="table-responsive table_` + field + `" >'
                + '                <table class="table">'
                + '                    <thead>'
                + '                        <tr>'
                + '                            <th class="form-builder">'
                + '                                <button type="button" class="remove_col_table" data-field="` + field + `">X</button>'                                
                + '                            </th>'
                + '                            <th class="form-builder">'
                + '                                <button type="button" class=" remove_col_table " data-field="` + field + `">X</button>'                                       
                + '                            </th>'
                + '                        </tr>'
                + '                    </thead>'
                + '                </table>'
                + '            </div>'
                + '      </div>'
                + '</div>',
        }
    ]




    sortableRow(components);
    
    $(document).on('click', '.remove_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).hide('400', function () {
            $(this).remove();

        });
    });

    $(document).on('click', '.edit_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).find(".holder").toggle('400');
        $(this).closest('.li_' + field).find(".prev-holder").toggle('400');
    });

    $(document).on('click', '.add_col_table', function (e) {
        e.preventDefault();    
        var field = $(this).attr('data-field');
        var html_col = `<th class="form-builder">                                        
                            <button type="button" class="btn btn-primary btn-sm remove_col_table pull-right" data-field="` + field + `">X</button>                                       </th>
                </th>`;
       
        $(this).closest('.li_' + field).find("table thead tr th:last-child").after(html_col);
    });

    $(document).on('click', '.remove_col_table', function (e) {
        e.preventDefault();
        $(this).parent().hide('400', function () {
            $(this).remove();

        });
    });

    $(document).on('click', '.btn-preview', function (e) {
        previewList(components)
    });

});

function sortableRow(components) {
    $(".layout-builder").sortable({
        connectWith: ".layout-builder"  ,
        placeholder: "placeholder-highlight" ,
        
        cursor: 'move',
        opacity: 0.9,
        revert: 150,
        start: function (event, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (event, ui) {
        
        }
    });

    $(".components-nav .component-col-1").draggable({
        helper: function () {
            return getRow_1_dHTML();
        },
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm(components);
        }
    });

    $(".components-nav .component-col-2").draggable({
        helper: function () {
            return getRow_2_dHTML();
        },
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm(components);
        }
    });

    $(".components-nav .component-col-3").draggable({
        helper: function () {
            return getRow_3_dHTML();
        },
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm(components);
        }
    });

    $(".components-nav .component-table").draggable({
        helper: function () {
            return getTabledHTML();
        },
        revert: true,
        connectToSortable: ".layout-builder",
        start: function (event, ui) {
           
        },
        stop: function(event, ui) {
            sortableForm(components);
        } 
    });
   
    $( ".layout-builder" ).disableSelection();
}

function sortableForm(components){

    $(".form-builder").sortable({
        connectWith: ".form-builder"  ,
        placeholder: "placeholder-highlight" ,
        items: "div:not(.holder-line)",
        cursor: 'move',
        opacity: 0.9,
        revert: 150,

        start: function (event, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
             //$(ui.helper).addClass("ui-draggable-helper");
        },
        stop: function (event, ui) {
        
        }
    });

    $(".components-nav .component").draggable({
        helper: function () {
            var field = generateField();
            var html = `<div class="btns-section">
                            <button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                            <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                        </div>`;
            return $('<div data-field="' + field + '">').addClass('li_' + field + ' form_builder_field').html(html);
    
        },       
        connectToSortable: ".form-builder",       
        start: function (event, ui) {          
            $.each(components, function(i, e) {
                var typeComponent = "component-"+ e.type;
                
                if(typeComponent === event.target.id){                    
                    var html = ui.helper.append(e.templateView);
                    html = ui.helper.append(e.templateEdit);
                    var bindTitle = 'title-' + $(html).attr("data-field");
                    var bindDesc = 'desc-' + $(html).attr("data-field");

                    $(html).find(".form-group > [bind=title]").each(function(i,e){
                        $(this).attr("bind",bindTitle);
                    });
                    $(html).find(".form-group > [bind=desc]").each(function(i,e){
                        $(this).attr("bind",bindDesc);
                    });
                }
            });             
        },
        stop: function(event, ui) {
            var pos = ui.helper.position(); 
             twoWayBinding();

             $.each(components, function(i, e) {
                var typeComponent = "component-"+ e.type;
                
                if(typeComponent === ''){                    
                    modifyDatapicker();
                }
            });  
             
            // console.log(ui.helper.parent());
            // var col = ui.helper.parent().prevAll().length;
              
            //   var headerObj = ui.helper.parent().parents('table').find('td').eq(col);
            //   return headerObj.append("<div>Hello</div>");
              // A quick test!
            //   console.log("My cell td is called: " + headerObj.text());
            //var pos = ui.helper.position(); // just get pos.top and pos.left
        }
    });


    $( ".form-builder" ).disableSelection();
}

function getRow_1_dHTML() {
    var field = generateField();
    var html = `<div class="layout li_` + field + `">
                     <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
                    <div class="row">
                        <div class="form-builder col-12">

                        </div>
                    </div>
                </div>`;
    return html;
};

function getRow_2_dHTML() {
    var field = generateField();
    var html = `<div class="layout li_` + field + `">
                     <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
                    <div class="row">
                        <div class="form-builder col-lg-6 col-md-6 col-12"></div>
                        <div class="form-builder col-lg-6 col-md-6 col-12"></div>
                    </div>
                </div>`;
    return html;
};

function getRow_3_dHTML() {
    var field = generateField();
    var html = `<div class="layout li_` + field + `">
                     <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
                    <div class="row">
                        <div class="form-builder col-lg-4 col-md-4 col-12"></div>
                        <div class="form-builder col-lg-4 col-md-4 col-12"></div>
                        <div class="form-builder col-lg-4 col-md-4 col-12"></div>
                    </div>
                </div>`;
    return html;
};

// function getTabledHTML() {
//     var field = generateField();
//     var html = `<div class="layout li_` + field + `">
//                      <button type="button" class="btn btn-primary btn-sm add_col_table pull-right" data-field="` + field + `">Add col</button>              
//                      <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>              
//                      <div class="table-responsive table_` + field + `" >
//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                     <th class="form-builder">
//                                         <button type="button" class="remove_col_table" data-field="` + field + `">X</button>                                       
//                                     </th>
//                                     <th class="form-builder">
//                                         <button type="button" class=" remove_col_table " data-field="` + field + `">X</button>                                       
//                                     </th>
//                                 </tr>
//                             </thead>
//                         </table>
//                     </div>
//                 </div>`;
//     return html;
// };

function getTextFieldHTML() {
    var field = generateField();
    var html = `<div class="btns-section">
                    <button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                    <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                </div>
                <div class="holder">
                    <div class="form-group">
                        <label bind="title-` + field + `"> Title  </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                    </div>
                </div>
                <div class="prev-holder">
                    <div class="form-group" type="text" >
                          <i>Text</i>
                          <input type="text" placeholder="Enter text"  bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","text").html(html);
};

function getInputFieldHTML() {
    var field = generateField();
    
    var html = `<button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                <div class="holder">
                    <div class="form-group" type="input" >
                        <label bind="title-` + field + `"> Title  </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                        <input type="text">
                    </div>
                </div>
                <div class="prev-holder">                  
                    <div class="form-group" type="input" >
                          <i>input</i>
                          <input type="text" placeholder="Enter text" bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;

               
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","text").html(html);
};

function getTextAreaFieldHTML() {
    var field = generateField();
    var html = `<button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                <div class="holder">
                    <div class="form-group">
                        <label bind="title-` + field + `"> Title  </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div class="prev-holder">
                     <div class="form-group" type="textarea">
                          <i>textarea</i>
                          <input type="text" bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","textarea").html(html);
};

function getDatePickerFieldHTML() {
    var field = generateField();
    
    var html = `<button type="button" class="btn btn-primary btn-sm edit_bal_field pull-right" data-field="` + field + `">Edit</button>
                <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                <div class="holder">
                    <div class="form-group">
                        <label bind="title-` + field + `"> Title </label>
                        <i class="small" bind="desc-` + field + `"> Desc </i>
                        <div class="date datepicker-group position-relative">
                            <input class="form-control salary-date w-100" type="text" name="date" placeholder="dd/mm/yy" id="birthday" required>
                            <span class="icon-calendar input-group-addon"></span>
                        </div>  
                        
                        <div class="dx-field">
                        <div class="dx-field-label">Date</div>
                        <div class="dx-field-value">
                            <div class="dev-datepicker"></div>
                        </div>
                    </div> 
                    
                </div>
                <div class="prev-holder">                  
                    <div class="form-group" type="datepicker" >
                          <i>datepicker</i>
                          <input type="text" placeholder="Enter text" bind="title-` + field + `">
                          <textarea name="" id="" cols="30" rows="10" bind="desc-` + field + `"></textarea>
                      </div>
                </div>`;

               
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","text").html(html);
};

function getCheckBoxFieldHTML() {
    var field = generateField();
    var html = `<div class="prev-holder">
                    <button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="` + field + `">X</button>
                    <div class="formbuilder-checkbox-group form-group field-checkbox-group-` + field + `-preview">
                        <label for="checkbox-group-` + field + `-preview" class="formbuilder-checkbox-group-label">sddad</label>
                        <div class="checkbox-group">
                            <div class="formbuilder-checkbox">
                                <input name="checkbox-group-` + field + `-preview[]" access="false" multiple="false" class="" id="checkbox-group-` + field + `-preview-0" value="option-1" type="checkbox" checked="checked">
                                <label for="checkbox-group-` + field + `-preview-0">Option 1</label>
                            </div>
                            <div class="formbuilder-checkbox">
                                <input name="checkbox-group-` + field + `-preview[]" access="false" multiple="false" class="" id="checkbox-group-` + field + `-preview-0" value="option-1" type="checkbox" checked="">
                                <label for="checkbox-group-` + field + `-preview-0">Option 1</label>
                            </div>
                        </div>
                    </div>
                </div>`;
    return $('<div>').addClass('li_' + field + ' form_builder_field').attr("type","checkbox-group").html(html);
};

function generateField() {
    return Math.floor(Math.random() * (100000 - 1 + 1) + 57);
};

function getList(){
    var formList = [];
    var formProperties = {};  
    var masterList = [];
    var detailList = [];

    $('.convertable-section .master-section .layout-builder .layout').each(function(i, e) {
        
        var row = {};  
            row['type'] = 'row'; 
            row['metadata'] =  {"index": i};
            row['childNode'] = [];
        
        $(this).find(".row .form-builder").each(function(i, e) {     

            var column = {};  
            column['type'] = 'col'; 
            column['metadata'] =  {"index": i};
            column['childNode'] = [];

            $(this).find(".prev-holder .form-group").each(function(i, e) {
                var properties = {}; 
                properties['metadata'] = 
                    {'type': $(this).attr("type"),
                    'title': $(this).find("input").val(),
                    'desc': $(this).find("textarea").val()};
                properties['childNode'] = [];
                column['childNode'].push(properties);     
                          
            });  
            
            row['childNode'].push(column);
        });
        
        masterList.push(row);
    });



    var JsonString = JSON.stringify(masterList, undefined, 2);
    // console.log(JsonString);
   return JsonString;
}

function previewList(components){
    $(".preview-section .master-section").empty();
    $(".preview-section .detail-section table").empty();
    var jsonForm = getList();
    
    var obj = JSON.parse(jsonForm);
    console.log(obj);
    var partyHTML = '';

    $.each(obj, function(partyIdx, row) {
        /*optional stuff to do after success */
        
        partyHTML += '<div class = "row">';
        var numCol = row.childNode.length;

        switch (numCol) {
            case (numCol = 1):                   
               
                $.each(row.childNode, function(id, col) {
                    partyHTML += '<div class = "col-12 form-builder">';     
                       $.each(col.childNode, function(id, properties){         
                        var property =  properties.metadata;
                        var condition = properties.metadata.type;
                        $.each(components, function(i, e) {
                            // switch (condition) {
                            //     case (condition = "text"):                 
                            //         partyHTML += `<div class="form-group" type="text" >
                            //                     <label>` + property.title + `</label>
                            //                     <i>` + property.desc + `</i>
                            //                 </div>`;
                            //         break;
                            //     case (condition = "input"):                   
                            //         partyHTML += `<div class="form-group" type="input" >
                            //                     <label>` + property.title + `</label>
                            //                     <i>` + property.desc + `</i>
                            //                     <input type="text" placeholder="Enter text">
                            //                 </div>`;
                            //         break;
                            //     case (condition = "textarea"):   
                            //         partyHTML += `<div class="form-group" type="textarea" >
                            //                     <label>` + property.title + `</label>
                            //                     <i>` + property.desc + `</i>
                            //                     <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                            //                 </div>`;
                            //         break;
                            //     case (condition = "radio"):
                            //         partyHTML += `<div class="form-group" type="input" >
                            //                     <label>` + property.title + `</label>
                            //                     <i>` + property.desc + `</i>
                            //                     <input type="text" placeholder="Radio">
                            //                 </div>`;
                            //         break;
                            //     case (condition = "group"):
                            //         partyHTML += `<div class="form-group" type="input" >
                            //                     <label>` + property.title + `</label>
                            //                     <i>` + property.desc + `</i>
                            //                     <input type="text" placeholder="group">
                            //                 </div>`;
                            //         break;
                            
                            // }
                            var typeComponent = e.type;
                            
                            if(condition === typeComponent){                    
                               
                                var html = e.templateView;
                                    var bindTitle = $(html).find(".form-group label").text(property.title);
                                    var test = $(html).html(bindTitle);
                                   
                                console.log(test);

                                partyHTML += html;
                            }
                        });   
                        
                    })                      
                });
               
                partyHTML += '</div>';
                break;

            case (numCol = 2):             
                $.each(row.childNode, function(id, col) {
                    partyHTML += '<div class = "col-lg-6 col-md-6 col-12 form-builder">';
                    $.each(col.childNode, function(id, properties){         
                        var property =  properties.metadata;
                        var condition = properties.metadata.type;
                        switch (condition) {
                            case (condition = "text"):                 
                                partyHTML += `<div class="form-group" type="text" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                        </div>`;
                                break;
                            case (condition = "input"):                   
                                partyHTML += `<div class="form-group" type="input" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <input type="text" placeholder="Enter text">
                                        </div>`;
                                break;
                            case (condition = "textarea"):   
                                partyHTML += `<div class="form-group" type="textarea" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                                        </div>`;
                                break;
                            case (condition = "radio"):
                                partyHTML += `<div class="form-group" type="input" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <input type="text" placeholder="Radio">
                                        </div>`;
                                break;
                            case (condition = "group"):
                                partyHTML += `<div class="form-group" type="input" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <input type="text" placeholder="group">
                                        </div>`;
                                break;
                        
                        }
                    })  
                    partyHTML += '</div>';
                
                });                      
            
                break;

            case (numCol = 3):                   
                $.each(row.childNode, function(id, col) {
                    partyHTML += '<div class = "col-lg-4 col-md-4 col-12 form-builder">';
                    $.each(col.childNode, function(id, properties){         
                        var property =  properties.metadata;
                        var condition = properties.metadata.type;
                        switch (condition) {
                            case (condition = "text"):                 
                                partyHTML += `<div class="form-group" type="text" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                        </div>`;
                                break;
                            case (condition = "input"):                   
                                partyHTML += `<div class="form-group" type="input" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <input type="text" placeholder="Enter text">
                                        </div>`;
                                break;
                            case (condition = "textarea"):   
                                partyHTML += `<div class="form-group" type="textarea" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                                        </div>`;
                                break;
                            case (condition = "radio"):
                                partyHTML += `<div class="form-group" type="input" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <input type="text" placeholder="Radio">
                                        </div>`;
                                break;
                            case (condition = "group"):
                                partyHTML += `<div class="form-group" type="input" >
                                            <label>` + property.title + `</label>
                                            <i>` + property.desc + `</i>
                                            <input type="text" placeholder="group">
                                        </div>`;
                                break;
                        
                        }
                    })  
                    partyHTML += '</div>';
                
                });   

                break;
        
        }

      
        
        partyHTML += '</div>';
      });
      
      $('.preview-section .master-section').append(partyHTML);


   
    
    // for(var i = 0; i < obj[0].master.length; i++){        
    //     var html ;
    //     var condition = obj[0].master[i].type;
    //     switch (condition) {
    //         case (condition = "text"):                   
    //             html = `<div class="form-group" type="text" >
    //                         <label>` + obj[0].master[i].title + `</label>
    //                         <i>` + obj[0].master[i].desc + `</i>
    //                     </div>`;
    //             break;
    //         case (condition = "input"):                   
    //             html = `<div class="form-group" type="input" >
    //                         <label>` + obj[0].master[i].title + `</label>
    //                         <i>` + obj[0].master[i].desc + `</i>
    //                         <input type="text" placeholder="Enter text">
    //                     </div>`;
    //             break;
    //         case (condition = "textarea"):   
    //             html = `<div class="form-group" type="textarea" >
    //                         <label>` + obj[0].master[i].title + `</label>
    //                         <i>` + obj[0].master[i].desc + `</i>
    //                         <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
    //                     </div>`;
    //             break;
    //         case (condition = "radio"):
    //             html = `<div class="form-group" type="input" >
    //                         <label>` + obj[0].master[i].title + `</label>
    //                         <i>` + obj[0].master[i].desc + `</i>
    //                         <input type="text" placeholder="Radio">
    //                     </div>`;
    //             break;
    //         case (condition = "group"):
    //             html = `<div class="form-group" type="input" >
    //                         <label>` + obj[0].master[i].title + `</label>
    //                         <i>` + obj[0].master[i].desc + `</i>
    //                         <input type="text" placeholder="group">
    //                     </div>`;
    //             break;
           
    //     }
    //    // var div = "<div class='whoWrap'>" + listP.PEOPLE[j].name + " " + j + "</div>"
    //     $(".preview-section .master-section").append(html);
    // }

    /* Append to table */
    // var $tableHeader = $('<tr/>');
    // for(var i = 0; i < obj[0].detail.length; i++){      
    //     $tableHeader.append( '<th>' + obj[0].detail[i].title + '</th>' );
    // }
    // var $tableBody = $('<tr/>');
    // for(var i = 0; i < obj[0].detail.length; i++){
    //     var html ;
    //     var condition = obj[0].detail[i].type;
    //     switch (condition) {
    //         case (condition = "text"):                   
    //             html = `<div class="form-group" type="text" >
    //                         <label>` + obj[0].detail[i].title + `</label>
    //                     </div>`;
    //             break;
    //         case (condition = "input"):                   
    //             html = `<div class="form-group" type="input" >
    //                         <input type="text" placeholder="Enter text">
    //                     </div>`;
    //             break;
    //         case (condition = "textarea"):   
    //             html = `<div class="form-group" type="input" >
    //                         <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
    //                     </div>`;
    //             break;
           
    //     }
      
    //     $tableBody.append( '<td>' + html + '</td>' );
    // }

    // $('#here_table').append($tableHeader);
    // $('#here_table').append($tableBody);
}

function addRow(){
    var jsonForm = getList();
    
    var obj = JSON.parse(jsonForm);

    var $tableBody = $('<tr/>');
    for(var i = 0; i < obj[0].detail.length; i++){
        var html ;
        var condition = obj[0].detail[i].type;
        switch (condition) {
            case (condition = "text"):                   
                html = `<div class="form-group" type="text" >
                            <label>` + obj[0].detail[i].title + `</label>
                        </div>`;
                break;
            case (condition = "input"):                   
                html = `<div class="form-group" type="input" >
                            <input type="text" placeholder="Enter text">
                        </div>`;
                break;
            case (condition = "textarea"):   
                html = `<div class="form-group" type="input" >
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text"></textarea>
                        </div>`;
                break;
           
        }
      
        $tableBody.append( '<td>' + html + '</td>' );
    }
    $('#here_table').append($tableBody);
    
}

function twoWayBinding(){
     $("*[bind]").on('change keyup', function (e) {
        var to_bind = $(this).attr('bind');
        $("*[bind='"+to_bind+"']").html($(this).val());
        $("*[bind='"+to_bind+"']").val($(this).val());
       })

}

function modifyDatapicker() {
    $(".datepicker-group").datepicker({
        format: "dd-mm-yyyy",
        language: "vi",
        startDate: new Date()
    });

    $(".dev-datepicker").dxDateBox({
        type: "date",
    });
   
}

