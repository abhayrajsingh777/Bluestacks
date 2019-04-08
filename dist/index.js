"use strict";

$.ajax({
  type: 'GET',
  url: '/data/campaign.json',
  dataType: 'json',
  success: function success(campaigns) {
    var outputId = $('#table');
    var output = "";
    $.each(campaigns, function (i, campaign) {
      output += "\n                <tr>\n                    <td class=\"align-middle\">\n                        <table>\n                            <tr>\n                                <td class=\"border border-0 p-0\">\n                                    <strong>".concat(campaign.date, "</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"border border-0 p-0\">").concat(campaign.day, " days ago</td>\n                            </tr>                            \n                        </table>\n                    </td>\n                    <td class=\"align-middle\">\n                        <table>\n                            <tr>\n                                <td class=\"border border-0 p-0\">\n                                    <i class=\"").concat(campaign.campaign_img, " pr-2\"></i>\n                                </td>\n                                <td class=\"border border-0 p-0\">\n                                    <table>\n                                        <tr>\n                                            <td class=\"border border-0 p-0\">\n                                                ").concat(campaign.camp_type, "\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"border border-0 p-0\">\n                                                ").concat(campaign.Country, "\n                                            </td>\n                                        </tr>                                                                \n                                    </table>                                \n                                </td>\n                            </tr>\n                        </table>\n                    </td>\n                    <td class=\"text-center\">\n                        <table>\n                            <tr>\n                                <td class=\"border border-0 p-0\">\n                                    <i class=\"ion-cash\"></i>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"border border-0 p-0\">VIEW PRICING</td>\n                            </tr>                                                                \n                        </table>                         \n                    </td>\n                    <td>\n                        <table class=\"w-100 text-center\">\n                            <tr>\n                                <td class=\"border border-0 p-0 div33\">\n                                    <a class=\"d-flex flex-column text-reset\">\n                                    <i class=\"ion-document-text\"></i><span>CITY</span></a>\n                                </td>\n                                <td class=\"border border-0 p-0 div33\">    \n                                    <a class=\"d-flex flex-column text-reset\">\n                                    <i class=\"ion-connection-bars\"></i><span>REPORT</span></a>\n                                </td>\n                                <td class=\"border border-0 p-0 div33\">\n                                    <a class=\"d-flex flex-column text-reset\">\n                                    <div class='input-group date' id='datetimepicker1'>\n                                        <input type='text' class=\"form-control\" />\n                                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-calendar\"></span>\n                                        </span>\n                                </div><span>SCHEDULE AGAIN</span></a>\n                                </td>\n                            </tr>\n                        </table>\n                    </td>                    \n                </tr>\n                ");
    });
    outputId.append(output);
  }
});
$(function () {
  var bindDatePicker = function bindDatePicker() {
    $(".date").datetimepicker({
      format: 'YYYY-MM-DD',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down"
      }
    });
  };

  bindDatePicker();
});