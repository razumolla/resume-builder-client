import React from 'react';
import { Link } from 'react-router-dom';

const FindAJob = () => {
    return (
        <div className='p-10 '>
            <h2 className='text-3xl mb-10 font-bold text-primary'>Find a Job Circular and Apply & Achieve your Dream Job </h2>
            <div class="overflow-x-auto dark:text-black ">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Job Site Name</th>
                            <th>Job Site Link</th>
                            <th>Job Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Bangladeshi sites  */}
                        <tr>
                            <th>1</th>
                            <td>bdjobs </td>
                            <td> <a href="https://www.bdjobs.com/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi</td>
                        </tr>
                        <tr class="active">
                            <th>2</th>
                            <td>kormojobs </td>
                            <td> <a href="https://kormo.google.com/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>  jagojobs.com</td>
                            <td> <a href="https://jagojobs.com/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr class="active">
                            <th>4 </th>
                            <td> Youthop  </td>
                            <td> <a href="https://www.youthop.com/bd/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr>
                            <th>5 </th>
                            <td> bdjobstoday.com  </td>
                            <td> <a href="https://bdjobstoday.com/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr class="active">
                            <th>6 </th>
                            <td>  chakrirkhobor.net  </td>
                            <td> <a href="https://chakrirkhobor.net/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr>
                            <th>7 </th>
                            <td>job.com.bd </td>
                            <td> <a href="http://job.com.bd/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr class="active">
                            <th>8 </th>
                            <td>  alljobsbd.com  </td>
                            <td> <a href="https://alljobsbd.com/main/jobcat/7" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr>
                            <th>9 </th>
                            <td>Chakri.com.bd </td>
                            <td> <a href="http://www.chakri.com.bd/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>
                        <tr class="active">
                            <th>10 </th>
                            <td> ejobscircular.com  </td>
                            <td> <a href="https://ejobscircular.com/" target="_blank">Click Here</a> </td>
                            <td>Bangladeshi </td>
                        </tr>

                        {/* International site  */}

                        <tr>
                            <th>11</th>
                            <td>LinkedIn </td>
                            <td> <a href="https://www.linkedin.com/jobs/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr class="active">
                            <th>12</th>
                            <td>Indeed </td>
                            <td> <a href="https://www.indeed.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>  Glassdoor</td>
                            <td> <a href="https://www.glassdoor.com/index.htm" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr class="active">
                            <th>14 </th>
                            <td> Monster  </td>
                            <td> <a href="https://www.monster.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr>
                            <th>15 </th>
                            <td> SimplyHired  </td>
                            <td> <a href="https://www.simplyhired.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr class="active">
                            <th>16 </th>
                            <td>  CareerBuilder  </td>
                            <td> <a href="https://www.careerbuilder.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr>
                            <th>17 </th>
                            <td>Dice </td>
                            <td> <a href="https://www.dice.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr class="active">
                            <th>18 </th>
                            <td>  ZipRecruiter </td>
                            <td> <a href="https://www.ziprecruiter.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr>
                            <th>19 </th>
                            <td>Job.com </td>
                            <td> <a href="https://www.job.com/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        <tr class="active">
                            <th>20 </th>
                            <td>angel.co </td>
                            <td> <a href="https://angel.co/" target="_blank">Click Here</a> </td>
                            <td>International</td>
                        </tr>
                        {/* Remote Job  */}
                        <tr>
                            <th>21 </th>
                            <td>skipthedrive </td>
                            <td> <a href="https://www.skipthedrive.com/" target="_blank">Click Here</a> </td>
                            <td>Remote Job</td>
                        </tr>
                        <tr class="active">
                            <th>22 </th>
                            <td>workingnomads </td>
                            <td> <a href="https://www.workingnomads.com/jobs/" target="_blank">Click Here</a> </td>
                            <td>Remote Job</td>
                        </tr>
                        <tr>
                            <th>23 </th>
                            <td> flexjobs </td>
                            <td> <a href="https://www.flexjobs.com/" target="_blank">Click Here</a> </td>
                            <td>Remote Job</td>
                        </tr>
                        <tr class="active">
                            <th>24 </th>
                            <td>angel.co </td>
                            <td> <a href="https://angel.co/" target="_blank">Click Here</a> </td>
                            <td>Remote Job</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FindAJob;